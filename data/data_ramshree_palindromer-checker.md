# palindromer-checker


A django/Python app to validate strings if its a palindrome or not.


<h3>System requirements</h3>

1. python 3 or greater
2. mac or windows
3. django 2.0.4 or greater
4. latest version of PyCharm editor
5. github for version control
6. Heroku to host the app


<h3>Setup instructions on Mac (Use terminal)</h3>

1. Open Terminal (Applications > Utilities > Terminal)

2. Install python 3.6 with homebrew from terminal
    ~$ brew install python

3. Install pip (Python Package installer)
    ~$ sudo easy_install pip

4. Install virtualenv (this is to contain all the changes we make instead of global)
    ~$ sudo pip install virtualenv

5. Create a folder pythondev to store all the code
    a. ~$ mkdir pythondev
    b. ~$ cd pythondev

6. Create a new virtualenv (django-dev is our virtual env)
    ~$ virtualenv django-dev -p python3.6

7. Activate virtualenv (the resulting command line will point to django-dev)
    ~$ . bin/activate

8. Install Django
    ~$ pip install django

9. Create a project
    ~$ django-admin startproject palindrome-checker
    ~$ cd palindrome-checker

10. I usually start the server to see how my project is building. Leave this open and server running.
    To shutdown Ctrl+C
    ~$ python manage.py runserver

11. Open the folder from PyCharm (File-> Open) and select the palindrome-checker folder

12. To run the tests. Look for the test result
    ~$ python manage.py test
    
<h3>Hosting on heroku</h3>

1. Create or login to <href>https://heroku.com</href>

2. Link your github account to pull the app 

3. Setup automatic deployment of app after commit

