from collections import deque

queue = deque()

graph = {}

graph["you"] = ["faik"]
graph["faik"] = ["ali", "özge", "serkan"]
graph["ali"] = ["kamil", "derya"]
graph["özge"] = ["derya"]
graph["serkan"] = ["mehmet"]
graph["kamil"] = []
graph["derya"] = []
graph["mehmet"] = []

class Graph:
    def __init__(self):
        self.elemanlar = []
        self.kökler = {}
    
    def graphs(self, grh):
        
        for i in grh:
            self.kökler[i] = grh[i]
            self.elemanlar.append(i)
    
    def bsf(self, hedef, kök= None):
        if kök is None:
            kök = self.elemanlar[0]

        bsf_kök = self.kökler;
        kontrol_kümesi = []
        queue.append(kök)
        kontrol_kümesi.append(kök)
        
        while(len(queue)):
            k = queue.popleft()
            
            if(k == hedef):
                return True
            
            for i in range(len(bsf_kök[k])):
                if  k in kontrol_kümesi :
                    kontrol_kümesi.append(bsf_kök[k][i])
                    queue.append(bsf_kök[k][i])
            print(f'gidilen yol: {queue}')
        
        return False
        


bsf_alg = Graph()
bsf_alg.graphs(graph)
print(bsf_alg.bsf("özge"))



