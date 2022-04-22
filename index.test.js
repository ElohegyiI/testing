const search = require('./index')
const mockDb = ['Molten2', 'Spalding2', 'Adidas2', 'Nike2', 'Pumaballs2', 'Kinaiballs2', 'Volleyballs2', 'Basketballs2', 'Tennisballs2', 'Golfballs2'] 

it("This is my first test", () => {
    expect('Hello').toEqual('Hello')
    search(mockDb, 'balls')
})

it("real search with empty result", () => {
    expect(search(mockDb, 'zzz')).toEqual([])
    
})

it("real search with balls keyword, expected empty array", () => {
    expect(search(mockDb, 'balls')).toEqual(['Pumaballs2', 'Kinaiballs2', 'Volleyballs2', 'Basketballs2', 'Tennisballs2', 'Golfballs2'])
    
})

