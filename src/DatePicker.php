<?php

namespace wdmg\widgets;

/**
 * Yii2 DatePicker
 *
 * @category        Widgets
 * @version         1.0.1
 * @author          Alexsander Vyshnyvetskyy <alex.vyshnyvetskyy@gmail.com>
 * @link            https://github.com/wdmg/yii2-datepicker
 * @copyright       Copyright (c) 2019 W.D.M.Group, Ukraine
 * @license         https://opensource.org/licenses/MIT Massachusetts Institute of Technology (MIT) License
 *
 */

use Yii;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\helpers\ArrayHelper;
use yii\widgets\InputWidget;
use yii\base\InvalidConfigException;

class DatePicker extends InputWidget
{

    public $addon = null;
    //public $template = "{label}\n{beginWrapper}\n{input}{addon}\n{hint}\n{error}\n{endWrapper}";
    public $template = "{input}{addon}";

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

    public $pluginOptions = [
        'className' => '.datepicker',
        'input' => '.form-control',
        'toggle' => '.input-group-btn > button',
        'format' => 'YYYY-MM-DD HH:mm:ss'
    ];

    private $datepickerId = null;

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
        // Input field
        if($this->hasModel())
            $input = Html::activeTextInput($this->model, $this->attribute, $this->options);
        else
            $input = Html::textInput($this->name, $this->value, $this->options);

        // Input addon
        if(!$this->addon)
            $this->addon = Html::tag($this->addonTag, $this->addonString, $this->addonOptions);

        $error = Html::error($this->model, $this->attribute, ['class' => 'help-block']);
        if(!$error)
            $error = '';

        $this->addon = Html::tag($this->addonButtonTag, $this->addon, $this->addonButtonOptions);
        $this->addon = Html::tag($this->addonContainerTag, $this->addon, $this->addonContainerOptions);

        // Build input group
        $this->datepickerId = 'dp-' . $this->options['id'];
        $this->template = Html::tag('div', $this->template, [
            'id' => $this->datepickerId,
            'class' => 'input-group',
            'data-rel' => 'datepicker'
        ]);

        // Collect tags to complate widget
        $input = strtr($this->template, ['{label}' => '', '{beginWrapper}' => '', '{input}' => $input, '{addon}' => $this->addon, '{hint}' => '', '{error}' => $error, '{endWrapper}' => '']);

        // Register assets
        $this->registerAssets();

        echo $input;
    }

    /**
     * Register required assets for the widgets
     */
    public function registerAssets()
    {
        $js = [];
        $view = $this->getView();

        // Register active datepicker assets to view
        DatePickerAssets::register($view);

        // Parse plugin options and insert inline
        $pluginOptions = !empty($this->pluginOptions) ? Json::encode($this->pluginOptions) : '';
        $js[] = "; jQuery('#" . $this->datepickerId . "').datepicker($pluginOptions);";

        // Register datepicker component initial script
        $view->registerJs(implode("\n", $js));

    }

}
