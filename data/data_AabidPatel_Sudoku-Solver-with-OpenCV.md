# Sudoku Solver using OpenCV Python

This Sudoku Solver uses a camera to search for a 9 by 9 Sudoku puzzle in the frame by extracting the matrix. It extracts the sudoku matrix by preprocessing the image and finding the largest contour of the frame. To preprocess the image, the image converted to a binary color space then a thresholding vlaue is applied to remove the unwanted noise. Then it classifies the digits using the keras model to identify which cell of the matrix is empty or filled and assigns the number classified to the corrosponding cell. 

The matrix is then solved using Backtracking algorithm. Backtracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time. The solution is then overlayed on the original frame.

![Sudoku-Github](https://user-images.githubusercontent.com/73630123/116782132-067b4600-aaa5-11eb-8f65-07cab96e15e5.jpg)
