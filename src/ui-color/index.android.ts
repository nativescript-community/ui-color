import { AndroidActivityNewIntentEventData, Application, Color, Frame, Utils, View } from '@nativescript/core';
export async function pickColor(
    color: Color | string,
    {
        alpha,
        anchor,
        bottomSpace = 12,
        cancelText = 'cancel',
        okText = 'choose',
        title = 'pick_color'
    }: { alpha?: boolean; anchor?: View; title?: string; cancelText?: string; okText?: string; bottomSpace?: number }
) {
    return new Promise<Color>((resolve) => {
        const activity = Application.android.startActivity;

        const builder = new com.skydoves.colorpickerview.ColorPickerDialog.Builder(activity)
            .setTitle(title)
            .attachAlphaSlideBar(alpha !== false)
            .setPositiveButton(
                okText,
                new com.skydoves.colorpickerview.listeners.ColorListener({
                    onColorSelected(color: number) {
                        resolve(new Color(color));
                    }
                })
            )
            .setNegativeButton(
                cancelText,
                new android.content.DialogInterface.OnClickListener({
                    onClick(dialogInterface) {
                        dialogInterface.dismiss();
                        resolve(null);
                    }
                })
            )
            .setBottomSpace(bottomSpace); // set a bottom space between the last slidebar and buttons.

        if (color && !(color instanceof Color)) {
            color = new Color(color as any);
        }
        if (color) {
            builder.getColorPickerView().setInitialColor((color as Color).android);
        }
        const popup = builder.create();
        popup.show();
    });
}
