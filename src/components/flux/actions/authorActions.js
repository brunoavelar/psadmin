"use strict";

var Dispatcher = require('../appDispatcher');
var ActionTypes = require('../../constants/actionTypes');

import AuthorApi from '../../../api/authorApi';

class AuthorActions {
    receiveAuthors(authors){
        Dispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_AUTHORS,
            authors: authors
        });
    }

    createAuthor(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }

    updateAuthor(author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }

    deleteAuthor(id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
}

export default new AuthorActions();
