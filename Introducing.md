Introducing
===
I choose to use the Vue framework to do this design test because your company is using this.

### Layout Design
I divide the content into two blocks，left side is called content message block and the right side is called form table block, the width ratio is 66 to 34. When the screen width resized below to 1024 pixel, the form table block will float to the content message block below, the two block layout changed to up-down and all content aligned in the middle. This design will show the view content with no-pressure but comfortable and gracefully on different devices.

### Break Point Design
This time ,our target device are desktops、laptops、iPad pro、iPad、modern mobile devices
1025px ~ 1224px - Desktops and laptops
789px ~ 1024px - iPad Pro protrait and iPad lanscape
481px ~ 768px - iPad protrait modern mobile device lanscape
below 480px - modern mobile protrait

refers to: https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/