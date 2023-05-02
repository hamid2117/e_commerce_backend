context('Login API', () => {
  it('returns the correct response', () => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      body: {
        email: 'hamid2@gmail.com',
        password: 'hamidhamid',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.getCookie('accessToken').then((cookie) => {
        expect(cookie).to.not.be.null
      })
      // to.deep.equal to check exact values of properties.
      expect(response.body).to.have.property('user')
      expect(response.body.user).to.have.property('name')
      expect(response.body.user).to.have.property('userId')
      expect(response.body.user).to.have.property('role')
    })
  })
})

context('Product API', () => {
  it('returns the correct response', () => {
    cy.request('/products').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('products')
      expect(response.body).to.have.property('count')
    })
  })
})
