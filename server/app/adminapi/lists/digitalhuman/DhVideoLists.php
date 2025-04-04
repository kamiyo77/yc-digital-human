<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\lists\digitalhuman;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\digitalhuman\DhVideo;
use app\common\lists\ListsSearchInterface;


/**
 * DhVideo列表
 * Class DhVideoLists
 * @package app\adminapi\listsdigitalhuman
 */
class DhVideoLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/11/06 14:29
     */
    public function setSearch(): array
    {
        return [
            '=' => ['task_id', 'name', 'status'],
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/11/06 14:29
     */
    public function lists(): array
    {
        return DhVideo::where($this->searchWhere)
            ->with('user')
            ->field(['id', 'task_id', 'uid', 'name', 'text', 'cover_image', 'channel','local_video_url','api_video_url', 'local_voice_url', 'scene_id', 'status', 'message'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/11/06 14:29
     */
    public function count(): int
    {
        return DhVideo::where($this->searchWhere)->count();
    }
}
