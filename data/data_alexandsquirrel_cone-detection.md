# Cone Detection for Autonomous Driving

Authors: Alex Fang, Gibbs Geng

## Overview

This is the final project of CSE 455: Computer Vision. The goal of our project is to develop a perception pipeline for a formula racing car. Technically, out goal is to find the exact locations of every cone given the camera input. Such locations can be therefore converted to the 3D locations in the world and then be fed into the SLAM module in the formula racing car.

Our project involves two stages. First, we obtain the bounding boxes around all cones with machine learning. Then, for each cone, we compute its precise location within the bounding box using a traditional CV approach. While stage 2 should be performed for every bounding box drawn in stage 1, however, given our limitation of training data, we did not establish such a connection. Instead, we demonstrated the feasibility of stage 1 by training a neural network on a generic cone-detection dataset. For stage 2, on the other hand, we ran our algorithm on a few hand-crafted bounding boxes on the official racing cones.


## Stage One: Bounding Box (mostly adapted from existing code with some modifications)

The approach is based on an [off-the-shelf implementation](https://github.com/zzh8829/yolov3-tf2) of YOLOv3. Then, we did transfer learning from [a set of pretrained weights](https://pjreddie.com/darknet/yolo/). We modified several hyperparameters as well as the prediction classes so that it can learn and predit well on our small [dataset](https://www.dropbox.com/s/fag8b45ijv14noy/cone_dataset.tar.gz?dl=0). The inferences results on both the training set and the validation set is available in `/detections` (yes, if we had more data, we would have a dedicated test set).

## Stage Two: Finding Precise Locations (implemented by our own in `./utils.py`)
At this stage, we aim to find the exact positions of the cone within each (loose) bounding box. We accomplished this with feature engineering. First, what is the characteristic feature of a racing cone? Our response to this question is the two sides and the band in the middle. Given a bounding box, if we know the two lines (not line segments) on which the two sidelines reside, plus the location of the middle trapezoid that is the band, since we have prior information about the size of the band, we will know about the exact location of this cone.

### Noise Reduction & Edge Detection
The racing cones are either yellow, blue or orange, which all have a rather stark contrast with the color of asphalt. Therefore, if we run an edge detector on the image, at least the two sidelines could be clearly marked. However, it turned out that a lot of noise are also marked, for example, the gravels on the ground. To reduce the noise, we pass the image through a bilaterial filter (a Gaussian filter will make later edge-detection impossible). Then, we run canny edge detection algorithm (provided in `cv2` library) on our image. It turns out that with the best set of parameters, the two sidelines are marked with some occasional discontinuity (due to the darkness of the environment). In addition, some curves on the base are also marked.

### Corner Detection
Given the detected edges as an image, we then aim to find which two straight lines are the real sidelines. We observed that given the nature of our cone, there is a very high chance that the sideline lies on the straight line formed by two corners, because on a sideline there are three obvious corners: the top and the two transitions in/out of the band. Given this observation, we run the Shi-Tomasi Corner Detector (`cv2.goodFeaturesToTrack`) on the image containing the edges to get a bunch of corners.

### Sideline Extraction
Given a bunch of corners, we want to get extract the two lines that form the sideline of the cone. Intuitively, since the two sidelines are the only two long line segments in the edge image, a "good" line would overlap greatly with those two line segments. For each pair of corners `(p1, p2)`, we "score" the line with high abs slope formed by the two points.
Scoring a line involves a bunch of heuristics; the higher the score is, the more likely it is to contain the sideline. 
- We first check the slope of the lines. Given the slidelines of the cone should always be large, we filter only the lines with high slope (the absolute value of the slope should be larger than 2).
-  A desired line should overlap with the edges of the cone side. Therefore, we first score the line with the number of edges detected with in a threshold of the line
-  A desired line should also cross several corner on the side. Therefore, we add the number of corner of the slide * corner_wight to the score
  
When calculating the score, we also grab the nearby corners of each line in order to form two horizontal lines of the trapezoid. Since the corners form the two horizontal lines should be in the middle of the two sideline, we only grab those corner from the middle 3/5 part of the line segment.
We then use the highest score line with positive slope and the highest score line with the negative to form the two sidelines, as well as returning the set of interest corner to check the band latter.

### Band Detection
We follow a similar procedure to locate the upper and the lower edges of the band. Since the two endpoints of either edge is likely to be a corner (because it involves a shift in color) which is very close to the sideline, we can enumerate all pairs of corners `(c1, c2)` where `c1` is a corner on the left sideline (except for the top and the bottom one) and `c2` likewise. The socring heuristic is as follows:
- The slope should be small relative to the orientation (or rotation) of the cone, because the band is horizontal.
- The line should roughly overlap with the band edges. Since the band edge is a convex curve, we allow for a larger margin.
- The "amount" of overlapping edges should be normalized by the length of this line segment, because a longer line segment will inevitably overlap more with the band edge than a shorter line segment which is just as good.

After scoring all candidate lines, we return the top two choices.


## Future Work

- Connect the object detection stage with the later stage once the YOLO model can be trained on the real racing cone dataset.
- Heavier feature engineering in finding the exact location. Or, we may explore machine learning method instead of traditional CV in this stage.
- Converting the exact locations of the cones into 3D coordinates with respect to the vehicle position. This requires the specification (focal length) of the camera being used.

## Usage

-  To train the network (make sure that `train.tfrecord` and `val.tfrecord` are in `/data`):
```
python train.py 
```

- To generate bounding boxes for an image (some of the flags may need to be modified):
```
python detect.py
```

- To draw the sidelines and the two band edges on an image with a single cone:
```
python script.py
```
(This part of code has not been cleaned up; `script.py` is only used to use the feasibility of the algorithms implemented in `utils.py`, which will be integrated more cleanly into the final pipeline.)
