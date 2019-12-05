dataset = [3,4,8,2.5,3,10];
names = ['Han', 'Leia', 'Luke','Rey','Kylo','Yoda'];
names1=['han']


let svgheight=450
let svgwidth=450

svg=d3.selectAll("body").append("svg").attr("width",svgwidth).attr("height",svgheight)

// lets think of it as adjustment
let yaxiswidth=40
let xaxisheight=10 // used only at one place


let width=360

let xscale=d3.scaleLinear()
    .domain([0,d3.max(dataset)])
    .range([0,(svgwidth-yaxiswidth)/2])

let Height =360
let yscale=d3.scaleBand()
    .domain(names)
    .range([0,Height])
    .padding(0.20)

let zscale=d3.scaleLinear()
    .domain(0)
    .range([0,Height])


let yaxis=d3.axisLeft(yscale)
let xaxis=d3.axisBottom(xscale)

let zaxis=d3.axisLeft(zscale)




let mid=(svgwidth-yaxiswidth)/2
let mid1=mid + yaxiswidth
svg.append("g").attr('transform', `translate(${yaxiswidth}, ${Height+xaxisheight})`).call(xaxis)
svg.append("g").attr('transform', `translate(  ${yaxiswidth}, 10)`).call(yaxis)
svg.append("g").attr('transform', `translate(  ${mid1}, 10)`).call(zaxis)

rectangles=svg.selectAll("rect").data(names).enter()
                .append("rect")
    .attr('transform', `translate(${ yaxiswidth },10)`)  // same as for y axis
                .attr("x",0)
                .attr("y",(d,i) => yscale(d))
                    .attr("width", (d,i) => xscale(dataset[i]))
                    .attr("height",yscale.bandwidth())
                    .attr("class","bar")

console.log(yscale.bandwidth())
console.log(svgwidth-yaxiswidth)