<?php


namespace wdmg\widgets;
use yii\web\AssetBundle;

class DatePickerAssets extends AssetBundle
{

    public $sourcePath = '@bower/bootstrap-datepicker-plugin/src';

    public $css = [
        'css/datepicker.css',
    ];

    public $js = [
        'js/datepicker.js'
    ];

    public $depends = [
        'yii\bootstrap\BootstrapPluginAsset'
    ];

}