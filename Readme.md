//fresh express code provided by ronald regaldo
//data binding code in tvshow/app_client/home/home.view.html assisted by ronald regaldo

#install express
sudo npm install -g express-generator

#create express workspace
express

#update packaje.json
npm install

#install nodemon
npm install -g nodemon

#Import the public key used by the package management system.
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

#Create a list file for MongoDB for Ubuntu Trusty 14.04
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

#Reload local package database.
sudo apt-get update

#Install the MongoDB packages.
sudo apt-get install -y mongodb-org

#Install Moongose
npm install --save mongoose

#create mongod script
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest --httpinterface "$@"' > mongod
chmod a+x mongod

#update packaje.json
npm install

#create app_api folder
mkdir app_api

#move routes and views under app_api
#under app.js change:
#var index = require('./app_api/routes/index');
#var users = require('./app_api/routes/users');
#app.set('views', path.join(__dirname,'app_api', 'views'));
#get jquery at jquery.com and place it under public/javascripts
#get bootstrap at getbootstrap.com and get distribution zip and install them under public/bootstrap
#get angular at angularjs.org and downlad the latest stable minified version and install under public/angular

#update heroku toolbelt
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
#login to heroku
heroku login

#add to package.json above dependencies
  "engines": {
  "node": "~4.2.1",
  "npm": "~2.2.0"
  },
  
#PUSH TO GITHUB USING SCRIPT FILE:
-------------------------------------------------------------------
#!/bin/bash
# helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script

git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin git@github.com:rregalado93/REPOSITORYNAME.git
git push -u origin master
-------------------------------------------------------------------        

#Run
sudo chmod 775 github.sh

#create application in heroku
heroku create

#deploy app to heroku
git push heroku master

#start a web dyno in heroku
heroku ps:scale web=1

#add mongolab to heroku app
heroku addons:add mongolab

#get the database URI
heroku config:get MONGOLAB_URI

#URI components
#mongodb://username:password@localhost:27027/database

#create temp folder to dump data
mkdir -p ~/tmp/mongodump

# -h the host server (and port)
# -d the database name
# -o The output destination folder
#dump the data
mongodump -h localhost:27017 -d Loc8r -o ~/tmp/mongodump

# -h Live host and port
# -d Live database name
# -u Username for the live database
# -p Password for the live database
#restore the data to live database
mongorestore -h ds033669.mongolab.com:33669 -d heroku_app20110907 -u
heroku_app20110907 -p PASSWORD ~/tmp/mongodump/DATABASENAME

#Test the database live
mongo hostname:port/database_name -u username -p password

#ensure heroku is using production mode
heroku config:set NODE_ENV=production

#start application is production mode
NODE_ENV=production nodemon