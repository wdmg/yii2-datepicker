<?php


namespace wdmg\widgets;

/**
 * @author          Alexsander Vyshnyvetskyy <alex.vyshnyvetskyy@gmail.com>
 * @copyright       Copyright (c) 2019 - 2020 W.D.M.Group, Ukraine
 * @license         https://opensource.org/licenses/MIT Massachusetts Institute of Technology (MIT) License
 */

use yii\web\AssetBundle;

class DatePickerAssets extends AssetBundle
{

    public $sourcePath = '@bower/bootstrap-datepicker-plugin/src';

    public function init()
    {
        parent::init();
        $this->css = YII_DEBUG ? ['css/datepicker.css'] : ['css/datepicker.min.css'];
        $this->js = YII_DEBUG ? ['js/datepicker.js'] : ['js/datepicker.min.js'];
        $this->depends = [\yii\web\JqueryAsset::class];
    }

}