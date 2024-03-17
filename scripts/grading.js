let btn = document.getElementById("btnCalculateGrades");
function ValidInteger(value)
{
    if (value == "")
    {
        return false;
    }

    if (value == null)
    {
        return false;
    }

    if (value == 0)
    {
        return false;
    }

    if (isNaN(value))
    {
        return false;
    }

    if (value == undefined)
    {
        return false;
    }
    return true;
};
btn.addEventListener("click", function ()
{
    // alert("btn clicked!");
    var subject = document.getElementById("course").value;
    var attendance = document.querySelector('input[name="attendance"]:checked').value;
    // var attendanceOptions = document.querySelectorAll('input[name="attendance"]');
    // for (const attendance of attendanceOptions)
    // {
    //     if (attendance.checked)
    //     {

    //         console.log("attendance", attendance.value);

    //     }
    // }
    if (attendance == 1)
    {
        var resultMessage = document.getElementById("resultMessage");
        var percentageMessage = document.getElementById("percentage");
        var gradeMessage = document.getElementById("grade");

        function EmptyResultFields()
        {
            resultMessage.textContent = "";
            percentageMessage.textContent = "";
            gradeMessage.textContent = "";
        }
        EmptyResultFields();

        var totalMarks = parseInt(document.getElementById("totalMarks").value);
        var obtainedMarks = parseInt(document.getElementById("obtainedMarks").value);
        // alert("totalmarks:" + totalMarks);
        if (!ValidInteger(totalMarks) || !ValidInteger(obtainedMarks))
        {
            result = "";
            percentage = "";
            grade = "";
            alert("Please fill required fields correctly");
            EmptyResultFields();
            return false;
        }

        if (totalMarks < obtainedMarks)
        {
            EmptyResultFields();
            alert("Total marks cannot be smaller than obtained marks!");
            return false;
        }


        var percentage = (obtainedMarks / totalMarks) * 100;
        // console.warn(totalMarks);
        // console.error(obtainedMarks);
        // console.info(calculationMethod);

        var result = "";
        var grade = ""

        var resultMessage = document.getElementById("resultMessage");
        var percentageMessage = document.getElementById("percentage");
        var gradeMessage = document.getElementById("grade");

        if (percentage >= 0 && percentage < 33)
        {
            result = "Fail";
            grade = "F";
        } else if (percentage >= 33 && percentage < 49)
        {
            result = "Pass";
            grade = "D";
        } else if (percentage >= 50 && percentage < 59)
        {
            result = "Pass";
            grade = "C";
        } else if (percentage >= 60 && percentage < 69)
        {
            result = "Pass";
            grade = "B";
        } else if (percentage >= 70 && percentage < 79)
        {
            result = "Pass";
            grade = "B+";
        }
        else if (percentage >= 80 && percentage < 89)
        {
            result = "Pass";
            grade = "A";
        } else if (percentage >= 90)
        {
            result = "Distinction";
            grade = "A+";
        } else
        {
            result = "";
            grade = "";
            percentage = "";
        }
    } else
    {
        alert("Person is absent!");
    }
    resultMessage.textContent = result;
    percentageMessage.textContent = percentage;
    gradeMessage.textContent = grade;
})
