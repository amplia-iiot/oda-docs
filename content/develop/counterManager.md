+++
title= "Counter Manager"
+++

## How to create your own counters

### Import counters in your bundle
You have to get the counter manager bundle in your code. For this you can create a new *CounterManagerProxy* in your **Activator.java** file, like this:

<code>
    new counterManagerProxy = new CounterManagerProxy(bundleContext);
</code>

### Create your own counters
For creating your own couter you have to create a new class that extends from *Counter.java*, create an enum for your configured counters and save a reference to counter manager. This is an example:

<code>
    
    public class TestCounters extends Counters {
        
        private static CounterManager counterManager;

        public enum TestCounterType {
            TEST_COUNTER_SIMPLE("TEST/COUNTER/SIMPLE"),
            TEST_COUNTER_REPLACE("TEST/COUNTER/REPLACE/type"),
            ;
                    
            private String m_name;
            
            private TestCounterType (String _nameString){
                m_name = _nameString;
            }
            
            public String getCounterString(String type) {
                String res = m_name;
                if (type != null)
                    res = res.replaceAll("type", type.toUpperCase());
                else
                    logger.warn("operation type is null");
                if (logger.isTraceEnabled())
                    logger.trace("counter string retrieved: " + res);
                return res;
            }
        
        }
            
        public TestCounters(CounterManager _counterManager) {
            TestCounters.counterManager = _counterManager;
        }
            
        public static void incrCounter(TestCounterType counter, int number) {
            counterManager.incrementCounter(counter.m_name, number);
        }
            
        public static void incrCounter(TestCounterType counter, String type, int number) {
            counterManager.incrementCounter(counter.getCounterString(type), number);
        }

    }
</code>

As you can see in the example above you can put a replace token in your counter for creating variable counters.

### Adding counters in your code
For adding counters in your you simply have to call the static methods that you have create in your counter class:

<code>
    
    TestCounters.incrCounter(TestCounters.TestCounterType.TEST_COUNTER_SIMPLE, 1);

    TestCounters.incrCounter(TestCounters.TestCounterType.TEST_COUNTER_REPLACE, "ANY_TYPE", 1);
</code>