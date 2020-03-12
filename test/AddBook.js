var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('./bookType');
var bookModel = require('./book');
exports.addBook = {
  type: bookType.bookType,
/* define os argumentos que devemos passar para a mutação,
   exigimos o nome do livro e o nome do autor,
   o ID será gerado automaticamente 
*/
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
        type: new GraphQLNonNull(GraphQLString),
      }
  },
  resolve: async(root, args)=> {
 //sob o método de resolução, obtemos nossos argumentos
  
    const uModel = new bookModel(args);
    const newBook = await uModel.save();
    if (!newBook) {
      throw new Error('error');
    }
    return newBook
  }
}