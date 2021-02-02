const data = [{"場地名稱":"大甲體育場" , "區域":"大甲區" , "地址":"臺中市大甲區大安港路2號" , "經度":"24.35087" , "緯度":"120.615496" , "管理機關":"大甲區公所" , "聯絡人":"李小姐" , "連絡電話":"04-26872101#204"},{"場地名稱":"太平區體育場" , "區域":"太平區" , "地址":"臺中市太平區中興東路99號" , "經度":"24.130993" , "緯度":"120.721122" , "管理機關":"臺中市政府運動局" , "聯絡人":"陳先生" , "連絡電話":"04-22289111#51311"},{"場地名稱":"洲際棒球場" , "區域":"北屯區" , "地址":"臺中市北屯區崇德路三段835號" , "經度":"24.199694" , "緯度":"120.684013" , "管理機關":"午陽資產公司" , "聯絡人":"周先生" , "連絡電話":"04-23112178#6422"},{"場地名稱":"臺中市立自由車場" , "區域":"清水區" , "地址":"臺中市清水區鰲峰路70號" , "經度":"24.272458" , "緯度":"120.582665" , "管理機關":"臺中市政府運動局" , "聯絡人":"吳小姐" , "連絡電話":"04-26227117"},{"場地名稱":"臺中市立豐原體育場" , "區域":"豐原區" , "地址":"臺中市豐原區豐北街221號" , "經度":"24.260823" , "緯度":"120.717475" , "管理機關":"豐原國中" , "聯絡人":"楊主任" , "連絡電話":"04-25251200#109"},{"場地名稱":"朝馬國民運動中心" , "區域":"西屯區" , "地址":"臺中市西屯區朝貴路199號" , "經度":"24.168205" , "緯度":"120.633409" , "管理機關":"中國青年救國團" , "聯絡人":"鄧小姐" , "連絡電話":"04-22536789#231"},{"場地名稱":"北區國民運動中心" , "區域":"北區" , "地址":"臺中市北區學士路100號" , "經度":"24.157101" , "緯度":"120.684126" , "管理機關":"凱格運動事業股份有限公司" , "聯絡人":"張經理" , "連絡電話":"04-22358675"},{"場地名稱":"南屯國民運動中心" , "區域":"南屯區" , "地址":"臺中市南屯區黎明路一段998號" , "經度":"24.1378484" , "緯度":"120.6364947" , "管理機關":"頂尖運動行銷公司" , "聯絡人":"金主任" , "連絡電話":"04-23829120"}]


$(document).ready(function () {
    let select = document.querySelector('.area_select');
    let container = document.querySelector('.container');
    let str = '<option class="disabled" value="all">---請選擇---</option>';
    
    data.forEach((item,index)=>{
        str += `<option value=${item["區域"]}>${item["區域"]}</option>`;
    })
    select.innerHTML = str;

    function renderWebsite(value ='all'){
        let Str ='';
        Str='<div class="row">';
        data.forEach((item,index)=>{
            if(value === 'all'){
                Str += `<div class="col-md-4">
                <div class="card">
                    
                    <h5 class="card-header">${item["場地名稱"]}</h5>
                    <div class="card-body">
                        <h5 class="card-title">場地名稱: ${item["場地名稱"]}</h5>
                        <p class="card-text">地址: ${item["地址"]}</p>
                        <p class="card-text">區域: ${item["區域"]}</p>
                    </div>
                </div>
                </div>`;    
            } else{
                if(item["區域"]===value){
                    Str += `<div class="col-md-4">
                        <div class="card">
                            <h5 class="card-header">${item["場地名稱"]}</h5>
                            <div class="card-body">
                                <h5 class="card-title">場地名稱: ${item["場地名稱"]}</h5>
                                <p class="card-text">地址: ${item["地址"]}</p>
                                <p class="card-text">區域: ${item["區域"]}</p>
                            </div>
                        </div>
                        </div>`; 
                }
            }
            
        }) 
        Str += '</div>';
        container.innerHTML = Str;
    }
    renderWebsite();


    select.addEventListener('change',function(e){
        console.log(e.target.value);
        renderWebsite(e.target.value);
    }, false);
});