# DCGAN-for-generating-human-faces-
## 1. Project overview : 
In this projects I built a Deep convolutional generative adversarial network (DCGAN) to generate new fake images of human faces . <br>
The model was trained on (CelebA)](http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html) 

## 2. Getting started :
In order to reproduce the same results(that can be found in the notebook itself) , make sure to follow the following steps : 
### 1. Clone the repository : 
``
git clone https://github.com/ZSoumia/DCGAN-for-generating-human-faces-.git      
``
### 2. Download the dataset : 
(CelebA)](http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html) 

### 3. Make sure to use the same tools : 
- Pytorch.
- Python 3.6.

### Advices : 
GANs are a bit too sensitive so trainning them to reach a low loss is a bit challenging, these are some tips that I discovered from training this neural network : 
- The BCEWithLogits performed better than the mean of squared errors
- In the optimizer's parameters generally setting beta1 to have a value between 0.2 and 0.35 seemed to improve my results
- Setting the learning rate of the discriminator to be 4 times greater than the learning rate of the generator helped speeding up the training process
- Setting a mini batch to a small value like 16 or 32 also enhanced the results .

## License : 
This project is licensed under the GNU [LICENSE](https://github.com/ZSoumia/DCGAN-for-generating-human-faces-/blob/master/LICENSE) file for details.
