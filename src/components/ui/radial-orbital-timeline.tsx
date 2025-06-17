"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, TrendingUp, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  degreeTitle?: string;
  institution?: string;
  courses?: string[];
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<{ 
    radius: number; 
    containerSize: number; 
    cardWidth: number;
    nodeSize: number;
    centerSize: number;
    orbitRingSize: number;
    // Text sizes
    nodeTitleSize: number;
    cardTitleSize: number;
    institutionSize: number;
    bodyTextSize: number;
    badgeTextSize: number;
    dateTextSize: number;
    sectionTitleSize: number;
    buttonTextSize: number;
    // Icon sizes
    nodeIconSize: number;
    cardIconSize: number;
    smallIconSize: number;
    // Spacing
    cardPadding: number;
    cardMargin: number;
    badgePadding: number;
    buttonPadding: number;
    progressBarHeight: number;
    borderWidth: number;
  }>({
    radius: 200,
    containerSize: 600,
    cardWidth: 600,
    nodeSize: 40,
    centerSize: 64,
    orbitRingSize: 400,
    // Text sizes
    nodeTitleSize: 14,
    cardTitleSize: 16,
    institutionSize: 16,
    bodyTextSize: 14,
    badgeTextSize: 12,
    dateTextSize: 14,
    sectionTitleSize: 14,
    buttonTextSize: 12,
    // Icon sizes
    nodeIconSize: 16,
    cardIconSize: 14,
    smallIconSize: 10,
    // Spacing
    cardPadding: 16,
    cardMargin: 32,
    badgePadding: 12,
    buttonPadding: 8,
    progressBarHeight: 8,
    borderWidth: 2
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to calculate responsive dimensions based on screen size
  const calculateDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const minDimension = Math.min(width, height);
    
    // Responsive radius calculation
    let radius: number;
    let containerSize: number;
    let cardWidth: number;
    let nodeSize: number;
    let centerSize: number;
    let orbitRingSize: number;
    
    // Text sizes
    let nodeTitleSize: number;
    let cardTitleSize: number;
    let institutionSize: number;
    let bodyTextSize: number;
    let badgeTextSize: number;
    let dateTextSize: number;
    let sectionTitleSize: number;
    let buttonTextSize: number;
    
    // Icon sizes
    let nodeIconSize: number;
    let cardIconSize: number;
    let smallIconSize: number;
    
    // Spacing
    let cardPadding: number;
    let cardMargin: number;
    let badgePadding: number;
    let buttonPadding: number;
    let progressBarHeight: number;
    let borderWidth: number;
    
    if (width < 640) { // Mobile (sm breakpoint)
      radius = Math.max(120, minDimension * 0.25);
      containerSize = minDimension * 0.8;
      cardWidth = Math.min(430, width * 0.85);
      nodeSize = 32;
      centerSize = 48;
      orbitRingSize = radius * 2;
      
      // Text sizes - smaller for mobile
      nodeTitleSize = 14;
      cardTitleSize = 14;
      institutionSize = 13;
      bodyTextSize = 12;
      badgeTextSize = 10;
      dateTextSize = 11;
      sectionTitleSize = 11;
      buttonTextSize = 9;
      
      // Icon sizes
      nodeIconSize = 12;
      cardIconSize = 12;
      smallIconSize = 8;
      
      // Spacing
      cardPadding = 12;
      cardMargin = 20;
      badgePadding = 8;
      buttonPadding = 6;
      progressBarHeight = 6;
      borderWidth = 1.5;
    } else if (width < 768) { // Small tablets (md breakpoint)
      radius = Math.max(150, minDimension * 0.28);
      containerSize = minDimension * 0.85;
      cardWidth = Math.min(500, width * 0.9);
      nodeSize = 36;
      centerSize = 56;
      orbitRingSize = radius * 2;
      
      // Text sizes
      nodeTitleSize = 15;
      cardTitleSize = 15;
      institutionSize = 14;
      bodyTextSize = 13;
      badgeTextSize = 11;
      dateTextSize = 12;
      sectionTitleSize = 12;
      buttonTextSize = 10;
      
      // Icon sizes
      nodeIconSize = 13;
      cardIconSize = 13;
      smallIconSize = 9;
      
      // Spacing
      cardPadding = 14;
      cardMargin = 24;
      badgePadding = 10;
      buttonPadding = 7;
      progressBarHeight = 7;
      borderWidth = 1.5;
    } else if (width < 1024) { // Large tablets (lg breakpoint)
      radius = Math.max(180, minDimension * 0.3);
      containerSize = minDimension * 0.9;
      cardWidth = Math.min(550, width * 0.8);
      nodeSize = 40;
      centerSize = 64;
      orbitRingSize = radius * 2;
      
      // Text sizes
      nodeTitleSize = 16;
      cardTitleSize = 16;
      institutionSize = 15;
      bodyTextSize = 14;
      badgeTextSize = 12;
      dateTextSize = 13;
      sectionTitleSize = 13;
      buttonTextSize = 11;
      
      // Icon sizes
      nodeIconSize = 14;
      cardIconSize = 14;
      smallIconSize = 10;
      
      // Spacing
      cardPadding = 16;
      cardMargin = 28;
      badgePadding = 12;
      buttonPadding = 8;
      progressBarHeight = 8;
      borderWidth = 2;
    } else if (width < 1280) { // Desktop (xl breakpoint)
      radius = Math.max(200, minDimension * 0.32);
      containerSize = Math.min(800, width * 0.8);
      cardWidth = 600;
      nodeSize = 44;
      centerSize = 72;
      orbitRingSize = radius * 2;
      
      // Text sizes
      nodeTitleSize = 16;
      cardTitleSize = 18;
      institutionSize = 16;
      bodyTextSize = 15;
      badgeTextSize = 13;
      dateTextSize = 14;
      sectionTitleSize = 14;
      buttonTextSize = 12;
      
      // Icon sizes
      nodeIconSize = 16;
      cardIconSize = 15;
      smallIconSize = 11;
      
      // Spacing
      cardPadding = 18;
      cardMargin = 32;
      badgePadding = 14;
      buttonPadding = 10;
      progressBarHeight = 9;
      borderWidth = 2;
    } else { // Large desktop (2xl breakpoint)
      radius = Math.max(240, minDimension * 0.35);
      containerSize = Math.min(1000, width * 0.75);
      cardWidth = 650;
      nodeSize = 48;
      centerSize = 80;
      orbitRingSize = radius * 2;
      
      // Text sizes - larger for big screens
      nodeTitleSize = 16;
      cardTitleSize = 20;
      institutionSize = 18;
      bodyTextSize = 16;
      badgeTextSize = 14;
      dateTextSize = 15;
      sectionTitleSize = 15;
      buttonTextSize = 13;
      
      // Icon sizes
      nodeIconSize = 18;
      cardIconSize = 16;
      smallIconSize = 12;
      
      // Spacing
      cardPadding = 20;
      cardMargin = 36;
      badgePadding = 16;
      buttonPadding = 12;
      progressBarHeight = 10;
      borderWidth = 2.5;
    }
    
    return {
      radius,
      containerSize,
      cardWidth,
      nodeSize,
      centerSize,
      orbitRingSize,
      nodeTitleSize,
      cardTitleSize,
      institutionSize,
      bodyTextSize,
      badgeTextSize,
      dateTextSize,
      sectionTitleSize,
      buttonTextSize,
      nodeIconSize,
      cardIconSize,
      smallIconSize,
      cardPadding,
      cardMargin,
      badgePadding,
      buttonPadding,
      progressBarHeight,
      borderWidth
    };
  };

  // Update dimensions on window resize
  useEffect(() => {
    const updateDimensions = () => {
      // Set resizing state to true to disable transitions
      setIsResizing(true);
      
      // Clear any existing timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      // Update dimensions immediately
      setDimensions(calculateDimensions());
      
      // Set timeout to re-enable transitions after resize is complete
      resizeTimeoutRef.current = setTimeout(() => {
        setIsResizing(false);
      }, 100); // Short delay to ensure resize is complete
    };

    // Set initial dimensions
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = dimensions.radius;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = 1; // Set consistent opacity for all nodes

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="flex items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 pb-16 sm:pb-20 md:pb-24 lg:pb-28 w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div 
        className="relative flex items-center justify-center"
        style={{
          width: `${dimensions.containerSize}px`,
          height: `${dimensions.containerSize}px`,
          maxWidth: '100vw',
          maxHeight: '100vh'
        }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* <div 
            className="rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10"
            style={{
              width: `${dimensions.centerSize}px`,
              height: `${dimensions.centerSize}px`
            }}
          >
            <div 
              className="absolute rounded-full border border-white/20 animate-ping opacity-70"
              style={{
                width: `${dimensions.centerSize + 16}px`,
                height: `${dimensions.centerSize + 16}px`
              }}
            ></div>
            <div
              className="absolute rounded-full border border-white/10 animate-ping opacity-50"
              style={{ 
                animationDelay: "0.5s",
                width: `${dimensions.centerSize + 32}px`,
                height: `${dimensions.centerSize + 32}px`
              }}
            ></div>
            <div 
              className="rounded-full bg-white/80 backdrop-blur-md"
              style={{
                width: `${dimensions.centerSize * 0.5}px`,
                height: `${dimensions.centerSize * 0.5}px`
              }}
            ></div>
          </div> */}

          <div 
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${dimensions.orbitRingSize}px`,
              height: `${dimensions.orbitRingSize}px`
            }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className={`absolute cursor-pointer ${
                  isResizing ? '' : 'transition-all duration-700'
                }`}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    
                    width: `${dimensions.nodeSize + 24}px`,
                    height: `${dimensions.nodeSize + 24}px`,
                    left: `-12px`,
                    top: `-12px`,
                  }}
                ></div>

                <div
                  className={`
                  rounded-full flex items-center justify-center
                  ${isExpanded ? "bg-white text-black scale-110" : "bg-black text-white scale-100"}
                  transition-all duration-300 transform
                `}
                  style={{
                    width: `${dimensions.nodeSize}px`,
                    height: `${dimensions.nodeSize}px`,
                    border: `${dimensions.borderWidth}px solid white`,
                    
                  }}
                >
                  <Icon size={dimensions.nodeIconSize} />
                </div>

                <div
                  className={`
                  absolute whitespace-nowrap font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-white/70"}
                `}
                  style={{
                    fontSize: `${dimensions.nodeTitleSize}px`,
                    bottom: `${dimensions.nodeSize + 8}px`,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card 
                    className="absolute bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible"
                    style={{
                      top: `${dimensions.nodeSize + dimensions.cardMargin}px`,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: `${dimensions.cardWidth}px`,
                      maxWidth: '95vw',
                      minHeight: 'auto',
                      borderWidth: `${dimensions.borderWidth}px`
                    }}
                  >
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 w-px bg-white/50"
                      style={{
                        top: `${-dimensions.cardMargin/2}px`,
                        height: `${dimensions.cardMargin/2}px`
                      }}
                    ></div>
                    <CardHeader style={{ padding: `${dimensions.cardPadding}px ${dimensions.cardPadding}px ${dimensions.cardPadding/1.5}px` }}>
                      <div 
                        className="flex justify-between items-center"
                        style={{ marginBottom: `${dimensions.cardPadding/1.5}px` }}
                      >
                        <Badge
                          className={`text-white font-medium ${getStatusStyles(item.status)}`}
                          style={{
                            fontSize: `${dimensions.badgeTextSize}px`,
                            padding: `${dimensions.badgePadding/2}px ${dimensions.badgePadding}px`,
                            borderWidth: `${dimensions.borderWidth}px`
                          }}
                        >
                          {item.status === "completed"
                            ? "COMPLETED"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span 
                          className="font-mono text-white/50"
                          style={{ fontSize: `${dimensions.dateTextSize}px` }}
                        >
                          {item.date}
                        </span>
                      </div>
                      
                      {/* Degree Title - White/Bright */}
                      <CardTitle 
                        className="text-white font-semibold leading-tight"
                        style={{ 
                          fontSize: `${dimensions.cardTitleSize}px`,
                          marginBottom: `${dimensions.cardPadding/2}px`
                        }}
                      >
                        {item.degreeTitle || item.title}
                      </CardTitle>
                      
                      {/* Institution - Current color (dimmer) */}
                      {item.institution && (
                        <div 
                          className="text-white/70 font-medium border-b border-white/10"
                          style={{ 
                            fontSize: `${dimensions.institutionSize}px`,
                            marginBottom: `${dimensions.cardPadding/2}px`,
                            paddingBottom: `${dimensions.cardPadding/2}px`
                          }}
                        >
                          {item.institution}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent 
                      className="text-white/80"
                      style={{ 
                        fontSize: `${dimensions.bodyTextSize}px`,
                        padding: `0 ${dimensions.cardPadding}px ${dimensions.cardPadding}px`
                      }}
                    >
                      {/* Related Courses Section */}
                      {item.courses && item.courses.length > 0 && (
                        <div style={{ marginBottom: `${dimensions.cardPadding}px` }}>
                          <div 
                            className="flex items-center"
                            style={{ marginBottom: `${dimensions.cardPadding/1.5}px` }}
                          >
                            <BookOpen size={dimensions.cardIconSize} className="text-white mr-2" />
                            <h4 
                              className="font-semibold text-white tracking-wider"
                              style={{ fontSize: `${dimensions.sectionTitleSize}px` }}
                            >
                              Related courses
                            </h4>
                          </div>
                          <div 
                            className="flex flex-wrap w-full"
                            style={{ gap: `${dimensions.cardPadding/3}px` }}
                          >
                            {item.courses.map((course, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-black border-white/50 text-white 
                                          hover:bg-black/80 hover:border-white transition-all duration-200 cursor-default
                                          whitespace-nowrap"
                                style={{
                                  fontSize: `${dimensions.badgeTextSize}px`,
                                  padding: `${dimensions.badgePadding/2}px ${dimensions.badgePadding}px`,
                                  borderWidth: `${dimensions.borderWidth/2}px`
                                }}
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="border-t border-white/10"
                        style={{ 
                          marginTop: `${dimensions.cardPadding}px`,
                          paddingTop: `${dimensions.cardPadding}px`
                        }}
                      >
                        <div 
                          className="flex justify-between items-center"
                          style={{ 
                            fontSize: `${dimensions.bodyTextSize}px`,
                            marginBottom: `${dimensions.cardPadding/2}px`
                          }}
                        >
                          <span className="flex items-center">
                            <TrendingUp size={dimensions.cardIconSize} className="text-white mr-2" />
                            <span 
                              className="font-semibold text-white tracking-wider"
                              style={{ fontSize: `${dimensions.sectionTitleSize}px` }}
                            >
                              Progress
                            </span>
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div 
                          className="w-full bg-white/10 rounded-full overflow-hidden"
                          style={{ height: `${dimensions.progressBarHeight}px` }}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div 
                          className="border-t border-white/10"
                          style={{ 
                            marginTop: `${dimensions.cardPadding}px`,
                            paddingTop: `${dimensions.cardPadding/1.25}px`
                          }}
                        >
                          <div 
                            className="flex items-center"
                            style={{ marginBottom: `${dimensions.cardPadding/2}px` }}
                          >
                            <Link size={dimensions.smallIconSize} className="text-white/70 mr-1" />
                            <h4 
                              className="uppercase tracking-wider font-medium text-white/70"
                              style={{ fontSize: `${dimensions.sectionTitleSize * 0.85}px` }}
                            >
                              Connected Nodes
                            </h4>
                          </div>
                          <div 
                            className="flex flex-wrap"
                            style={{ gap: `${dimensions.cardPadding/4}px` }}
                          >
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                  style={{
                                    fontSize: `${dimensions.buttonTextSize}px`,
                                    height: `${dimensions.buttonPadding * 3}px`,
                                    padding: `0 ${dimensions.buttonPadding}px`,
                                    borderWidth: `${dimensions.borderWidth/2}px`
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={dimensions.smallIconSize}
                                    className="ml-1 text-white/60"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

