function timer() {
					var date1 = new Date(2016,11,23,00,00,00,0);
					var date2 = new Date();
					var timeDiff = Math.abs(date2.getTime() - date1.getTime());
					var milliSecDiff = timeDiff%1000;
                    milliSecDiff = Math.floor(milliSecDiff/10);
                    timeDiff=timeDiff/1000;
					var diffDays = Math.floor(timeDiff / (3600 * 24));
					timeDiff = timeDiff%(3600*24);
					var hourDiff = Math.floor(timeDiff/(3600));
					timeDiff = timeDiff%(3600);
					var minDiff = Math.floor(timeDiff/(60));
					timeDiff = timeDiff%(60);
					var secDiff = Math.floor(timeDiff);
					console.log(milliSecDiff)
                
					console.log(diffDays+" days");
					console.log(hourDiff+" hours");
					console.log(minDiff+" mins");
					console.log(secDiff+" secs");

					document.getElementById('days1').innerHTML = Math.floor(diffDays/10);
					document.getElementById('days2').innerHTML = Math.floor(diffDays%10)
					document.getElementById('hours1').innerHTML = Math.floor(hourDiff/10);
					document.getElementById('hours2').innerHTML = Math.floor(hourDiff%10)
					document.getElementById('minutes1').innerHTML = Math.floor(minDiff/10);
					document.getElementById('minutes2').innerHTML = Math.floor(minDiff%10)
					document.getElementById('sec1').innerHTML = Math.floor(secDiff/10);
					document.getElementById('sec2').innerHTML = Math.floor(secDiff%10);
					document.getElementById('milliSec1').innerHTML = Math.floor(milliSecDiff/10);
					document.getElementById('milliSec2').innerHTML = Math.floor(milliSecDiff%10)

				 }

window.setInterval(function(){timer();},10);