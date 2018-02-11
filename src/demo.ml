
[@@@bs.config no_export ]
module M = Belt.Map.Int
let check b = 
  if not b then Js.Exn.raiseError "impossible"


let test () =
  let m = ref M.empty in
  let count = 1000000 in
  for i = 0 to count do
    m := M.set !m i i 
  done;
  for i = 0 to count do
     check (M.has !m i) 
  done

let () =  
  Js.Console.timeStart "buckle";
  test();
  Js.Console.timeEnd "buckle"