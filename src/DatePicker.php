<?php

namespace wdmg\widgets;

use Yii;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\helpers\ArrayHelper;
use yii\widgets\InputWidget;
use yii\base\InvalidConfigException;

class DatePicker extends InputWidget
{

    public $addon = null;
    public $template = '{input}{addon}';

    public $options = [
        'class' => 'form-control'
    ];

    public $addonTag = 'span';
    public $addonString = '';
    public $addonOptions = [
        'class' => 'glyphicon glyphicon-calendar',
        'aria-hidden' => 'true'
    ];

    public $addonContainerTag = 'span';
    public $addonContainerOptions = [
        'class' => 'input-group-btn'
    ];

    public $addonButtonTag = 'button';
    public $addonButtonOptions = [
        'class' => 'btn btn-default',
        'type' => 'button'
    ];

    public $clientOptions = [
        'className' => '.datepicker',
        'input' => '.form-control',
        'toggle' => '.input-group-btn > button',
    ];

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
    }

    /**
     * @inheritdoc
     */
    public function run()
    {
        // Register assets
        $this->registerAssets();

        if(!$this->addon)
            $this->addon = Html::tag($this->addonTag, $this->addonString, $this->addonOptions);

        if($this->hasModel())
            $input = Html::activeTextInput($this->model, $this->attribute, $this->options);
        else
            $input = Html::textInput($this->name, $this->value, $this->options);

        $this->addon = Html::tag($this->addonButtonTag, $this->addon, $this->addonButtonOptions);
        $this->addon = Html::tag($this->addonContainerTag, $this->addon, $this->addonContainerOptions);

        $this->template = Html::tag('div', $this->template, [
            'class' => 'input-group',
            'data-rel' => 'datepicker'
        ]);

        $input = strtr($this->template, ['{input}' => $input, '{addon}' => $this->addon]);

        echo $input;

    }

    /**
     * Register required assets for the widgets
     */
    public function registerAssets()
    {
        $js = [];
        $view = $this->getView();

        DatePickerAssets::register($view);

        $id = $this->options['id'];
        //$selector = ";$('#$id').parents('.input-group')";
        $selector = ";$('[data-rel=\"datepicker\"]')";

        $options = !empty($this->clientOptions) ? Json::encode($this->clientOptions) : '';
        $js[] = "$selector.datepicker($options);";

        $view->registerJs(implode("\n", $js));

    }

}
