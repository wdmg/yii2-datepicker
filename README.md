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
v.1.0.0 - Widget in progress development.