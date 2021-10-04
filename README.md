# swipable-modal
v0.0.3
Vue plugin - Create a simple swipable modal on mobile devices.
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/46995810/135887586-40e571d7-ab61-4627-818b-dddfafacb000.gif)

## Installation
```
npm i vue-swipable-modal
```
or
```
yarn add vue-swipable-modal
```

Then you can install your plugin globally with
```
...
import SwipableModal from 'vue-swipable-modal'

Vue.use(SwipableModal)
...
```

## Usage
You can use the plugin as a simple component in Vue.
```
<swipable-modal>
  <div>
    <div class="title">
      Awesome modal!
    </div>
    <div class="content">
      Yeah, this is my awesome content.
    </div>
  </div>
</swipable-modal>
```

## Options
| Parameter    | Required | Type            | Default                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|--------------|----------|-----------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| position          |      | String          |       'top'                                         | Position of the swipable modal. Set to "top" or "bottom"                                                                                                                          

## Coming soon
X axis suppor and some other customizations
