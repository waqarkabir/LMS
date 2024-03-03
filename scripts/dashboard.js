//Checking if DOM is ready!
$(function ()
{
    //Categories Section
    let categories = [];

    function loadCategories()
    {
        let categoryNames = ['Web', 'Databases', 'Desktop'];
        for (let index = 0; index < categoryNames.length; index++)
        {
            let category = {
                id: index + 1,
                name: categoryNames[index]
            }
            categories.push(category);

        }
    }

    function displayCategories()
    {
        for (let index = 0; index < categories.length; index++)
        {
            let row = `<a href="#"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-id=${categories[index].id}>
                ${categories[index].name}
            </a>`;
            $('.list-group').append(row);
        }
    }

    loadCategories();
    displayCategories();

    //Courses Section
    let Courses = [{
        id: 1,
        name: "C#",
        categoryId: 1
    }, {
        id: 2,
        name: "JavaScript",
        categoryId: 1
    }, {
        id: 3,
        name: "SQL Server",
        categoryId: 2
    }, {
        id: 4,
        name: "Xamarine",
        categoryId: 3
    }, {
        id: 5,
        name: "PHP",
        categoryId: 1
    }, {
        id: 6,
        name: "MySQL",
        categoryId: 2
    }];

    function displayCourses(categoryId, searchText)
    {
        $('#courses').html('');
        for (let index = 0; index < Courses.length; index++)
        {
            if (Courses[index].categoryId == categoryId || Courses[index].name.includes(searchText))
            {
                let row = `
                <div class="card m-2 p-2">
                    <div class="card-header">
                        <h3>${Courses[index].name}</h3>
                    </div>
                    <div class="card-body">
                        <div class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam
                            cupiditate, molestias ratione dolor quod atque beatae officia, accusamus aut voluptatibus
                            modi mollitia vitae nesciunt hic optio blanditiis ut voluptatum.
                        </div>
                        <a href="/Course/${Courses[index].id}" class="card-link">Card Link</a>
                    </div>
                </div>`;
                $('#courses').append(row);
            }
        }
    }

    // JQuery API
    //Select.API_CALL
    $('.list-group-item').on('click', function (event)
    {
        event.preventDefault();

        let element = $(this);
        displayCourses(element.data("id"));
    })

    $('#SearchButton').on('click', function ()
    {
        let oldText = $('#SearchText').val();
        displayCourses('', oldText);
    });
});