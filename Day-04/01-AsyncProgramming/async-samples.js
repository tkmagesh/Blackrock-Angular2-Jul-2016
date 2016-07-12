var pgm = (function(){
	function addSync(x,y){
		console.log(`      [Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`      [Service] returning result`);
		return result;
	}
	function addSyncClient(x,y){
		console.log(`[Consumer] triggering add operation`);
		var result = addSync(x,y);
		console.log(`[Consumer] result = ${result}`);
	}

	function addAsync(x,y, onResult){
		console.log(`      [Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`      [Service] returning result`);
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
		
	}
	function addAsyncClient(x,y){
		console.log(`[Consumer] triggering add operation`);
		addAsync(x,y, function(result){
			console.log(`[Consumer] result = ${result}`);
		});
		
	}

	var addAsyncEvents = (function(){
		var _callbacks = [];
		return {
			onResult : function(callback){
				_callbacks.push(callback);
			},
			trigger : function(x,y){
				console.log(`      [Service] processing ${x} and ${y}`);
				setTimeout(function(){
					var result = x + y;
					console.log(`      [Service] returning result`);
					_callbacks.forEach(cb => cb(result));
				},3000);
			}
		}
	})();

	function addAsyncPromise(x,y){
		console.log(`      [Service] processing ${x} and ${y}`);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`      [Service] returning result`);
				resolveFn(result);
			},3000);
		});
		return promise;		
	}


	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})();