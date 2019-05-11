$(document).ready(function(){
    $.ajax({
        url: "http://dvhbooks.com/api/city",
        type: "GET",
        success: function (data) {
            for(let i=0; i<data.length; i++) {
                $('#InputCity').append(`<option value="${data[i].ID}">${data[i].Title}</option>`);
            }
            console.log(data[0]);
        }
    });

    $("#InputCity").change((e) => {
        const ID = e.target.value;
        if (ID == 0) {
            $('#InputDistrict').empty();
            $('#InputDistrict').append('<option value="0">Chọn Huyện</option>');
        } else {
            $.ajax({
                url: `http://dvhbooks.com/api/city/${ID}/district`, 
                type: "GET", 
                success: function (data) {
                    console.log(data);
                    for(let i = 0; i < data.length; i++) {
                        $('#InputDistrict').append(`<option value="${data[i].ID}">${data[i].Title}</option>`)
                    }
                    $('#InputDistrict').val(0);
                }
            });
        }
        
    });
// xu ly su kien thanh toan don hang
  $("#payment").click(function(){
    let a = $("#bill").css("display");
    console.log(a);
    if(a == "none") {
        
        if($("#note").css("visibility") !== "hidden") {
            alert("giỏ hàng của bạn hiện chưa có sản phẩm");
        }
        else{
            $("#bill").css("display", "block");
            $("#cart-detail").css("display", "none");
            $(".step1 i").removeClass("bg-danger");
            $(".step2 i").addClass("bg-danger");
            $(".step3 i").removeClass("bg-danger");
        }
        
    }
    showBill();
    
  });