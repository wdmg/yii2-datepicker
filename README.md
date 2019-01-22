[![Progress](https://img.shields.io/badge/required-Yii2_v2.0.13-blue.svg)](https://packagist.org/packages/yiisoft/yii2) [![Github all releases](https://img.shields.io/github/downloads/wdmg/yii2-helpers/total.svg)](https://GitHub.com/wdmg/yii2-helpers/releases/) [![GitHub version](https://badge.fury.io/gh/wdmg%2Fyii2-datepicker.svg)](https://github.com/wdmg/yii2-datepicker) ![Progress](https://img.shields.io/badge/progress-in_development-red.svg) [![GitHub license](https://img.shields.io/github/license/wdmg/yii2-datepicker.svg)](https://github.com/wdmg/yii2-datepicker/blob/master/LICENSE)

# Yii2 DatePicker
Bootstrap3 DatePicker Widget for Yii2

# Requirements 
* PHP 5.6 or higher
* Yii2 v.2.0.13 and newest

# Installation
To install the widget, run the following command in the console:

`$ composer require "wdmg/yii2-datepicker"`

# Usage
Example of standalone widget:

    <?php
    
    use wdmg\widgets\DatePicker;
    ...
    
    echo DatePicker::widget([
        'model' => $model,
        'attribute' => 'datetime',
        'options' => [
           'class' => 'form-control'
        ],
        'pluginOptions' => [
            'className' => '.datepicker',
            'input' => '.form-control',
            'toggle' => '.input-group-btn > button',
        ]
        ...
    ]);
    
    ?>

Example of use with ActiveForm:

    <?php
    
    use wdmg\widgets\DatePicker;
    ...
    
    $form = ActiveForm::begin();
    ...
    echo $form->field($model, 'datetime')->widget(DatePicker::className(), [
        'options' => [
            'class' => 'form-control'
        ],
        'pluginOptions' => [
            'className' => '.datepicker',
            'input' => '.form-control',
            'toggle' => '.input-group-btn > button',
        ]
        ...
    ]);
    ...
    ActiveForm::end();
    
    ?>


# Options

DatePicker extends InputWidget so you can use any options available for this widget. In addition, you can use these custom options if necessary:

| Name                   | Type    | Default                   | Description            |
|:---------------------- | ------- |:------------------------- |:---------------------- |
| options                | array   | `['class' => 'form-control']` | Standard options for the input widget. |
| pluginOptions          | array   | `['className' => '.datepicker', 'input' => '.form-control', 'toggle' => '.input-group-btn > button']` | Plugin DatePicker options passed to js. Read more here (https://github.com/wdmg/bootstrap-datepicker). |
| template               | string  | {input}{addon}            | Widget output template.|
| addon                  | string  | `null`                    | Addon template addon. Use this option if you will not use the options listed below. |
| addonTag               | string  | span                      | Addon input tag.  |
| addonString            | string  | `empty`                   | Addon content. Usually absent if you are using glypicon or fontawesome. |
| addonOptions           | array   | `['class' => 'glyphicon glyphicon-calendar', 'aria-hidden' => 'true']` | Options tag addon input widget. |
| addonContainerTag      | string  | span                      | Addon container tag.  |
| addonContainerOptions  | array   | `['class' => 'input-group-btn']` | Options of the container addon input widget. |
| addonButtonTag         | string  | button                    | Tag who will display a DatePicker widget for input. |
| addonButtonOptions     | array   | `['class' => 'btn btn-default', 'type' => 'button']` | Options of tag who will display a DatePicker widget for input. |

# Status and version
* v.1.0.0 - Widget in progress development.