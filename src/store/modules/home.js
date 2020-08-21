export default {
    state: {
        appName: "",  // 应用名称
        themeColor: "#67c23a",  // 主题颜色
        oldThemeColor: "#67c23a",   // 上一次主题颜色
        showLoading: false,    // 加载动画
        /*
        * 一级弹出层
        * @param {show} 展示/隐藏
        * @param {title} 弹出层标题
        * @param {data} 编辑页面需要回显的数据
        * */
        popup: {
            show: false,
            title: '',
            data: {},
            widths: {}
        },
        /*
        * 编辑成功列表刷新
        * */
        refreshState: false,
        refreshType: 'add',//edit
        /*
        * 头部中间信息提示
        * */
        prompts: []
    },
    getters: {
        themeColor(state) {
            return state.themeColor;
        },
        loadingShow(state) {
            return state.showLoading;
        },
        popup(state) {
            return state.popup;
        },
        refreshState(state) {
            return state.refreshState;
        },
        refreshType(state) {
            return state.refreshType;
        },
        prompts(state) {
            return state.prompts;
        },
    },
    mutations: {
        changeTheme(state, color) {
            state.oldThemeColor = state.themeColor;
            state.themeColor = color;
        },
        changeLoading(state, bool) {
            state.showLoading = bool;
        },
        changePopup(state, obj) {
            state.popup = obj;
            // for (key in obj) {
            //     state.popup[key] = obj[key];
            // }
        },
        changeRefreshState(state, type) {
            state.refreshType = type;
            state.refreshState = !state.refreshState;
        },
        changePrompts(state, obj) {
            let promptFlag = true;
            state.prompts.map((item, index) => {
                if (item.name === obj.name) {
                    promptFlag = false;
                    if (!obj.show) {
                        state.prompts.splice(index, 1);
                    } else {
                        item.show = obj.show;
                        item.msg = obj.msg;
                    }
                }
            });
            if (promptFlag && obj.show) {
                state.prompts.push(obj);
            }
        }
    },
    actions: {
        changeLoadingActive({commit}, bool) {
            commit('changeLoading', bool);
        },
        changePopupActive({commit}, obj) {
            commit('changePopup', obj);
        },
        changeRefreshStateActive({commit}, type) {
            commit('changeRefreshState', type);
        },
        changePromptsActive({commit}, obj) {
            commit('changePrompts', obj);
        }
    }
};