/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gonespatial.app.utils;

import com.vaadin.data.Property;
import com.vaadin.data.Property.ValueChangeListener;
import com.vaadin.data.fieldgroup.FieldGroup;
import com.vaadin.ui.Component;
import com.vaadin.ui.FormLayout;
import com.vaadin.ui.Layout;
import com.vaadin.ui.Notification;
import com.vaadin.ui.Notification.Type;
import com.vaadin.ui.OptionGroup;
import com.vaadin.ui.PopupView;
import com.vaadin.ui.PopupView.PopupVisibilityListener;
import com.vaadin.ui.TextField;
import com.vaadin.ui.TwinColSelect;

/**
 *
 * @author Moses Gone <moses.gone@t-systems.com>
 * Created on 31-Jul-2014, 17:33:30
 */
public class ContentFactory {

    public static void initChoiceEditor(FormLayout editorLayout, Layout parentPanel) {
        editorLayout.removeAllComponents();
        PopupView question = new PopupView(new PopupTextFieldContent());

        question.addPopupVisibilityListener(new PopupVisibilityListener() {

            @Override
            public void popupVisibilityChange(PopupView.PopupVisibilityEvent event) {
                final String message = "Popup "
                        + (event.isPopupVisible() ? "opened" : "closed");
                Notification.show(message, Type.TRAY_NOTIFICATION);
            }
        });

        TwinColSelect sample = new TwinColSelect();

        for (int i = 0; i < 6; i++) {
            sample.addItem(i);
            sample.setItemCaption(i, "Option " + i);
        }
        sample.setRows(6);
        sample.setNullSelectionAllowed(true);
        sample.setMultiSelect(true);
        sample.setImmediate(true);
        sample.setLeftColumnCaption("Available options");
        sample.setRightColumnCaption("Selected options");

        sample.addValueChangeListener(new ValueChangeListener() {

            @Override
            public void valueChange(Property.ValueChangeEvent event) {
                final String valueString = String.valueOf(event.getProperty()
                        .getValue());
                Notification.show("Value changed:", valueString,
                        Type.TRAY_NOTIFICATION);
            }
        });
        editorLayout.addComponent(question);
        editorLayout.addComponent(sample);
        parentPanel.addComponent(editorLayout);
    }

    // Create a dynamically updating content for the popup

    public static class PopupTextFieldContent implements PopupView.Content {

        private final TextField textField = new TextField(
                "Minimized HTML content", "Click to edit");

        @Override
        public final Component getPopupComponent() {
            return textField;
        }

        @Override
        public final String getMinimizedValueAsHTML() {
            return textField.getValue();
        }

    };
}
