
function test (success) {
    wx.request({
        url:'https://www.easy-mock.com/mock/5c7f81f5ad8223794d873943/example/api/user',
        dataType: 'json',
        success
    });
}

export {
    test
}