#!/bin/bash

# Build Vue app
npm run build

# Make static folders if they don't exist
mkdir -p ../static/css
mkdir -p ../static/js

# Copy and rename dist files into static folder
cp dist/css/app.*.css ../static/css/app.css
cp dist/js/app.*.js ../static/js/app.js 
cp dist/js/chunk-vendors.*.js ../static/js/chunk-vendors.js

# Run flask server
# cd ..
# python3 -m flask run --host=10.1.1.120