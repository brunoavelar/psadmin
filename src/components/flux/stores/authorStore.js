var Dispatcher = require('../appDispatcher');
var ActionTypes = require('../../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

import _ from 'lodash';


class AuthorStore extends EventEmitter{
    constructor(props){
        super(props);
        this.authors = [];
        this.CHANGE_EVENT = 'change';

        this.setupDispatcher();
    }

    setupDispatcher(){
        Dispatcher.register(action => {
            switch (action.actionType) {
            case ActionTypes.INITIALIZE:
                this._initialize(action);
                break;
            case ActionTypes.RECEIVE_AUTHORS:
                this._receiveAuthors(action);
                break;
            case ActionTypes.CREATE_AUTHOR:
                this._createAuthor(action);
                break;
            case ActionTypes.UPDATE_AUTHOR:
                this._updateAuthor();
                break;
            case ActionTypes.DELETE_AUTHOR:
                this._deleteAuthor(action);
                break;
            default:

            }
        });
    }

    _receiveAuthors(action){
        this.authors = action.authors;
        this.emit(this.CHANGE_EVENT);
    }

    _initialize(action){
        this.authors = action.initialData.authors;
        this.emit(this.CHANGE_EVENT);
    }

    _createAuthor(action){
        this.authors.push(action.author);
        this.emit(this.CHANGE_EVENT);
    }

    _updateAuthor(action){
        var existingAuthor = _.find(this.authors, {id: action.author.id});
        var existingAuthorIndex = _.indexOf(this.authors, existingAuthor);
        this.authors.splice(existingAuthorIndex, 1, action.author);
        this.emit(this.CHANGE_EVENT);
    }

    _deleteAuthor(action){
        _.remove(this.authors, function(author){
            return action.id === author.id;
        });
        this.emit(this.CHANGE_EVENT);
    }

    addChangeListener(callback){
        this.on(this.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(this.CHANGE_EVENT, callback);
    }

    getAllAuthors(){
        return this.authors;
    }

    getAuthorById(id){
        return _.find(this.authors, {id: id});
    }
}

export default new AuthorStore();
