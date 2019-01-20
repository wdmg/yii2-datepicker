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
    //public $template = '{label}\n<div class="input-group">{input}\n{addon}</div>\n{hint}\n{error}';
    //public $template = '<div class="input-group">{input}{addon}</div>';
    //public $template = '{beginLabel}{labelTitle}{endLabel}<div class="input-group">{input}{addon}</div>{error}{hint}';
    public $template = '<div class="input-group">{input}{addon}</div>';

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

        $this->options['class'] = 'form-control';

        if($this->hasModel())
            $input = Html::activeTextInput($this->model, $this->attribute, $this->options);
        else
            $input = Html::textInput($this->name, $this->value, $this->options);

        $this->addon = Html::tag('button', $this->addon, ['class' => 'btn btn-default', 'type' => 'button']);
        $this->addon = Html::tag('span', $this->addon, ['class' => 'input-group-btn']);
        $input = strtr($this->template, ['{input}' => $input, '{addon}' => $this->addon]);

        echo $input;
    }

}
