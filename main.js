const Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'Worker'
    },
    validate: function (attributes) {
        console.log(attributes);
        if (attributes.age < 0) {
            console.log('age is too low');
            return 'Age must be positive.';
        }

        if (!attributes.name) {
            return 'Every person must have a name.';
        }

    },
    work: function () {
        return this.get('name') + 'is working.';
    }
});

const PersonView = Backbone.View.extend({
    tagName: 'li',
    className: 'person',
    id: 'person-id',
    my_template: _.template($('#personTemplate').html()),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.my_template(this.model.toJSON()));
    }
});

const PeopleCollection = Backbone.Collection.extend({
    model: Person
});


const arrayOfPeople = new PeopleCollection([
    {
        name: 'Aundra Miller',
        age: 22,
        occupation: "Web App dev"
    },
    {
        name: 'Kristie Mitten',
        age: 'Unknown',
        occupation: 'Scrum Master'
    }
]);

// arrayOfPeople.forEach((person) => {
//     var personView = new PersonView({ model: person});
//     $(document.body).html(personView.el);
// })