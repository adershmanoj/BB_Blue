export default function featureExtractor(nounList){
	var sortedNounList = [];
	for ( noun in nounList ) {
    sortedNounList.push([noun, nounList[noun]]);
	}
	sortedNounList.sort((a,b) => b[1][0]-a[1][0]);
	sortedNounList = sortedNounList.slice(0, 6);//selecting 5 features
	let index = sortedNounList[0].indexOf('');
  sortedNounList.splice(index, 1);//removing blank space from array
	let result = [];
	sortedNounList.forEach((featureArray) => {
		polarity = featureArray[1][1];
		feature = featureArray[0];
		count = featureArray[1][0];
		if(polarity > 0 )
			polarity += 5;
		else
			polarity += 2;
		if(polarity > 10)
			polarity = 10;
		result.push([feature, polarity]);
	});
	console.log(result);
}
