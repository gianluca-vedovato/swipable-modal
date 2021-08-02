# swipable-modal
v0.0.3
Vue plugin to create a simple modal with swipable behavior on mobile devices.
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