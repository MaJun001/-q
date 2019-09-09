import Mock from 'mockjs'

Mock.mock('/api/list','get',{
    'list|6':[{
        'id|+1':1,
        'img':'@image(130x130)',
        'price|30-100':30,
        'title':'@ctitle',
        'num':1
    }]
})