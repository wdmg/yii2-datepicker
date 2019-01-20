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

    public $addon = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>';
    public $template = '<div class="input-group">{input}{addon}</div>';

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

        if(!$this->addon)
            $this->addon = Html::tag($this->addonTag, $this->addonString, $this->addonOptions);

        if($this->hasModel())
            $input = Html::activeTextInput($this->model, $this->attribute, $this->options);
        else
            $input = Html::textInput($this->name, $this->value, $this->options);

        $this->addon = Html::tag($this->addonButtonTag, $this->addon, $this->addonButtonOptions);
        $this->addon = Html::tag($this->addonContainerTag, $this->addon, $this->addonContainerOptions);
        $input = strtr($this->template, ['{input}' => $input, '{addon}' => $this->addon]);

        echo $input;
    }

}
