<template>
    <Page>
        <ActionBar title="Color picker Demo" />
        <StackLayout>
            <AbsoluteLayout width="100%" height="40" :backgroundColor="color" />
            <Button text="pick color" @tap="pickColor" />
            </StackLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import { CoreTypes, StackLayout, View, alert, confirm } from '@nativescript/core';
import { pickColor } from '@nativescript-community/ui-color';

export default Vue.extend({
    data() {
        return {
            color: 'red'
        };
    },
    methods: {
        async pickColor(event) {
            const newColor = await pickColor(this.color, { anchor: event.object });
            if (newColor) {
                this.color = newColor;
            }
        }
    }
});
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
    color: white;
}
Button {
    background-color: #42b883;
    color: white;
}
</style>
