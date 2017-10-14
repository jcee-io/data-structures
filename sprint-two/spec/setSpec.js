describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should accept strings', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should accept numbers', function() {
    set.add(5);
    expect(set.contains(5)).to.equal(true);
  });

  it('🤠 should accept any type and not acknowledge arrays nor objects', function() {
    set.add(false);
    set.add(['🤠']);
    set.add({ 'a': 'b'});
    
    

    expect(set.contains(false)).to.equal(true);
    expect(set.contains(['🤠'])).to.equal(false);
    expect(set.contains({ 'a': 'b'})).to.equal(false);

  });

  it('🤠 should have size reflect sad object filter', function() {
    set.add(false);
    set.add(['hello']);
    set.add({ 'a': 'b'});
    set.add(function() {});
    set.add(false);
    set.add(['hello']);
    set.add({ 'a': 'b'});
    set.add(function() {});
    set.add(['hello']);
    set.add({ 'a': 'b'});
    expect(set.size()).to.equal(9);
  });
});
