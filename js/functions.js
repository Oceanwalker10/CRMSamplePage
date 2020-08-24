
/* add your functions here */

/* global books, isbn, title, description, university*/

function Book(isbn,title,description,universities) { 
    this.isbn = isbn;
    this.title = title;
    this.description = description;
    this.universities = universities;
}

/* Should be Book.prototypeoutputCard() it allow you to create the function once
 * in memory.
 * this.isbn
 * this.title
 * this.description
 * this.universities
*/
function OutPutCard() {
    var bookcard = "";
    for (var i=0; i < books.length; i++) {
        var b = books[i];
        var universityarray = [[]];
        for (var j=0; j< university[i].length; j++) {
            var u = university[i][j];
        
            universityarray = universityarray + "<li>" + u + "</li>";
        }
        
            bookcard = bookcard + "<div class='mdl-cell mdl-card mdl-shadow--2dp'>"
                    + "<div class='mdl-card__media'>"
                    + "<img  src='images/" + b.isbn + ".jpg' title='" + b.title + "'>"
                    + "</div>"
                    + "<div class='mdl-card__supporting-text'>"
                    + "<p>" + b.description + "</p>"
                    + "<h6>Adopters</h6> "
                    + "<ul>"
                    + universityarray
                    + "</ul>"
                    + "</div>"
                    + "<div class='mdl-card__actions mdl-card--border'>"
                    + "<a class='mdl-button'>READ MORE</a>"
                    + "</div>"
                    + "</div>";
    }
    return bookcard;
}