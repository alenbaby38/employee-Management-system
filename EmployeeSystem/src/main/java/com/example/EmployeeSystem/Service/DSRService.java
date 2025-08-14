package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.DSR;
import com.example.EmployeeSystem.Model.DSRTaskEntry;
import com.example.EmployeeSystem.Repository.DSRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

import java.util.Map;
import java.util.stream.Collectors;

import java.util.List;

@Service
public class DSRService {
    @Autowired
    private DSRRepository dsrRepository;
@Autowired
MongoTemplate mongoTemplate;
    public DSR submitDSR(DSR dsr) {
        validateDSRTasks(dsr.getEntries());
        return dsrRepository.save(dsr);
    }

    private void validateDSRTasks(List<DSRTaskEntry> entries) {
        int totalMinutes = 0;
        for (DSRTaskEntry entry : entries) {
            if (entry.getMinutesSpent() > 120) {
                throw new IllegalArgumentException("A task cannot exceed 120 minutes.");
            }
            totalMinutes += entry.getMinutesSpent();
        }
        if (totalMinutes > 480) {
            throw new IllegalArgumentException("Total task time exceeds 8 hours (480 minutes).");
        }
    }
    public List<DSR> findByUserId(String employeeName) {

        return dsrRepository.findByUserId(employeeName);
    }
    public List<Map<String, Object>> getTop5UsersByDSRTime() {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.unwind("entries"), // Deconstruct entries array
                Aggregation.group("userId")
                        .sum("entries.minutesSpent").as("totalMinutes"),
                Aggregation.sort(Sort.by(Sort.Direction.DESC, "totalMinutes")),
                Aggregation.limit(5)
        );

        AggregationResults<Map> results = mongoTemplate.aggregate(aggregation, "dSR", Map.class);

        return results.getMappedResults().stream()
                .map(result -> {
                    Map<String, Object> map = (Map<String, Object>) result;
                    map.put("userId", result.get("_id")); // Rename _id to userId
                    map.remove("_id");
                    return map;
                }).collect(Collectors.toList());
    }


}
