# Rocket

**Rocket** is an ES6 starter (compiled with Babel) which is based on **Wordpress CMS**, basically built to do **good shit** 🔥

# Live demonstration

* [Rocket Demo](http://rocket.theokleman.com/)

Other projects built with Rocket

* [jeannebenichou.com](http://jeannebenichou.com/)
* [remibonnet.com](http://remibonnet.com/)
* ...
* [submit yours](https://twitter.com/Theo_KlMan)

# Get started - How to test Rocket in local

> This starter includes the demonstration linked above

## 1 - Introduction

First of all, **clone this repository** into your local `www` folder
`git clone https://github.com/TheoKleman/rocket`

## 2 - Server requirements

⚠️ **This starter only works with a [virtualhost](https://httpd.apache.org/docs/2.4/vhosts/), and he must target the `public` folder of your project.**

To run WordPress you must use

* **[PHP](http://www.php.net/)** (v5.6 or greater)
* **[MySQL](http://www.mysql.com/)** (v5.6 or greater)

## 3 - Database

You should **use the database dump** included into your project. You could find the last DB dump in `dump` folder.

Import this .sql file in a **new table** called `rocket`

⚠️ **Check if the MySQL credentials provided in `public/wp-config.php` file are the same as yours**

## 4 - Development environement

> ***All the things concerning this part are contained into the `compiler` folder***

### NodeJS

You need a **recent installation of [NodeJS](https://nodejs.org/en/)**.

Then, you can install Node dependencies needed for this starter by using the following commands

```
$ cd /path/to/project/compiler
$ npm install
```

### Gulp & Webpack config

⚠️ **You must set the BrowserSync `proxy` value into the Gulp config file by remplacing it with the previously created virtualhost value**

```
$ cd /path/to/project/compiler/config
$ nano general.config.js
```

```javascript
module.exports = {
	allowNotifications: true,
	scripts: {
		entry: 'Main.es6',
		inputPath: './src/scripts',
		outputPath: '../public/wp-content/themes/rocket-theme/js',
		outputName: 'main'
	},
	styles: {
		entry: 'main.scss',
		inputPath: './src/styles',
		outputPath: '../public/wp-content/themes/rocket-theme/css'
	},
	browserSync: {
		proxy: <YOUR VIRTUALHOST>,
		open: false,
		notify: false,
		https: false,
		ui: false,
		ghostMode: false
	}
}
```

### ESLint & Editor config

Rocket provides an **ESLinter**, you can set up your own ESLint by editing the `.eslintrc` file

## 5 - Let's get ready to rumble

Simply run `gulp` into `compiler` folder, hope you will enjoy it ! 🚀

> NB : By default, Wordpress back office logs are `admin` / `admin`


# Todo

* Add store/dispatcher
* Write best practices docs
