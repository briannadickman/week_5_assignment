describe('the prototype answers', function() {
  it('should be correct', function() {

    expect(lilSebastianBirthday).to.equal(undefined);
    expect(lilSebastianAge).to.equal(new Date().getUTCFullYear() - new Date(1986, 1).getUTCFullYear());
  });
});
