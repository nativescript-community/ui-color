{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

#### Platform controls used:

| Android                                                                                  | iOS                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [Android ColorPickerView](https://github.com/skydoves/ColorPickerView) | Platform APis |

## API

```ts
export async function pickColor(
    color: Color | string,
    {
        alpha,
        anchor,
        bottomSpace = 12,
        cancelText = 'cancel',
        okText = 'choose',
        title = 'pick_color'
    }: { 
        alpha?: boolean;  // Android only
        anchor?: View;  // iOS only
        title?: string;  // Android only
        cancelText?: string;  // Android only
        okText?: string;  // Android only
        bottomSpace?: number; // Android only
    }
)
```

## Demos
This repository includes Vue.js demo. In order to run these execute the following in your shell:
```shell
$ git clone https://github.com/@nativescript-community/ui-color
$ cd ui-checkbox
$ npm i
$ npm run setup
$ npm run build # && npm run build.angular
$ cd demo-ng # or demo-vue or demo-svelte
$ ns run ios|android
```

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}