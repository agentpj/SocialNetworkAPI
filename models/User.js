const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Schema to create User model
// need to validate the email above
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // thoughts is an array
    thoughts: [
      { type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    // friends is an array
    friends: [
        { type: Schema.Types.ObjectId,
          ref: 'User',
       }
      ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field on querry
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
  

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
