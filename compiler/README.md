#Gulp starter

## 1. Requirements and installation

### Clone repository

First of all, clone this repository on a empty project folder

`git clone https://github.com/TheoKleman/gulp.git`

### NodeJS

You need a **recent installation of [nodejs](http://nodejs.org/)**.

Then, you can install Node dependencies needed for this starter

```shell
cd {path/to/this_repository}
npm install
```

## Gulp

This project also works with [gulp](http://gulpjs.com/), follow this instruction to install it
```shell
sudo npm install --global gulp-cli
```


## 2. Project initialisation

**We highly recommand to use this file tree**

```
your_awesome_project
│   README.md
│   .gitignore
│   ...
│
└─── {this repository}
│      
│   
│       
│
├───src
│   │
│   ├─── scripts
│   │    ... where you write .es6 files
│   │
│   └─── styles
│        ... where you write .scss files
│
└─── build
	│   index.html (file you must write)
	│   ...
	│
	├─── js
	│    ... where your .es6 files are compiled
	│
	└─── css
		 ... where your .scss files are compiled
```

But you also can set your own configurations in `config/general.config.js`

## 3. Run tasks

Simply run `gulp` on your terminal

## 4. Contributors

[Romain Billard](https://github.com/rmnbrd/) & [Théo Kleman](https://github.com/TheoKleman/)
