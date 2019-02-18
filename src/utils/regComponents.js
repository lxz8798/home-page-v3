/* eslint-disable */
/*
 * @Description: 
 * @Author: 李啸竹
 * @Date: 2018-11-22 09:16:41
 */
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layer from "@/components/layout";
import TagComp from "@/components/tag";
import Inscription from "@/components/inscription";
import rowLayout from "@/components/rowlayout";

const compArray = [Header,Footer,Layer,TagComp,Inscription,rowLayout];
const reaComp = {
    install: function (Vue) {
        compArray.forEach(item => {
            Vue.component(item.name, item)
        })
    }
}

export default reaComp;