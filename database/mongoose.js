//connecting to moongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anish:atnm123@cluster0.rv92y.mongodb.net/gogaga?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
.then(data => {
    console.log("connected to the database");
    
})
.catch(err => {
    console.log('not able to connect to databbase');
    console.log(err);
});

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
