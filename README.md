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
        'template' => '<div class="input-group">{input}{addon}</div>',
        'options' => [
           'class' => 'form-control'
        ],
        // 'addon' => null, // Uncomment and place addon string template or use options below instead
        'addonTag' => 'span',
        'addonString' => '',
        'addonOptions' => [
           'class' => 'glyphicon glyphicon-calendar',
           'aria-hidden' => 'true'
        ],
        'addonContainerTag' => 'span',
        'addonContainerOptions' => [
           'class' => 'input-group-btn'
        ],
        'addonButtonTag' => 'button',
        'addonButtonOptions' => [
           'class' => 'btn btn-default',
           'type' => 'button'
        ]
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
        // 'addon' => null, // Uncomment and place addon string template or use options below instead
        'addonTag' => 'span',
        'addonString' => '',
        'addonOptions' => [
            'class' => 'glyphicon glyphicon-calendar',
            'aria-hidden' => 'true'
        ],
        'addonContainerTag' => 'span',
        'addonContainerOptions' => [
            'class' => 'input-group-btn',
        ],
        'addonButtonTag' => 'button',
        'addonButtonOptions' => [
            'class' => 'btn btn-default',
            'type' => 'button'
        ]
    ]);
    ...
    ActiveForm::end();
    
    ?>

# Status and version
* v.1.0.0 - Widget in progress development.