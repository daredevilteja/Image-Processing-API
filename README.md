# Image-Processing-API

This api is used to resize the images inside `images` folder to required **width** and **height**

# Setup

1. Install [Node.js](https://nodejs.org/en/) into your local machine.
2. Clone this repository into your local machine.
3. Go to the root directory in your cloned folder and then run `npm install`.
4. Run `npm run start` to start the webserver.
5. Open [localhost:3000](https://localhost:3000) in your browser.

# Usage

1. Place the image(.jpg) files which you want to resize into `images` directory.
2. Goto [http://localhost:3000/api/images?filename={image_name}&width={image_width}&height={image_height}](http://localhost:3000/api/images?filename=fjord&width=100&height=100) to start the conversion and see your converted image.
3. In the above mentioned url replace `image_name` with your images name and `width`, `height` with the width and height you want your image to get converted.
4. After the conversion process, you can find your converted images in the `converted-images` folder which is present in your root directory.

# Scripts

1. `npm run start` - to start the server.
2. `npm run lint` - to apply linting and find any errors in source files.
3. `npm run prettier` - to apply the prettier formatting on source files.
4. `npm run jasmine` - to run tests using jasmine.
5. `npm run build` - to run the build script and generate build files.
6. `npm run test` - to generate the build files and then run jasmine for testing.
