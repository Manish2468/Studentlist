student_array=[];

function submit()
{for (var j=1;j<=5;j++)
    {var n=document.getElementById("student_"+j).value;
     student_array.push(n)
    }
    document.getElementById("display_sname").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
    
}    

function sorting()
{student_array.sort();
document.getElementById("display_sname").innerHTML=student_array;}